<?php 

require_once (dirname(__FILE__) . '/classes/controllers/PA_Menu_Walker.class.php');
require_once (dirname(__FILE__) . '/classes/controllers/PA_Menu_Mobile.class.php');
require_once (dirname(__FILE__) . '/classes/controllers/PA_Image_Check.php');
require_once (dirname(__FILE__) . '/classes/controllers/PA_Loop_Archive.php');
require_once (dirname(__FILE__) . '/classes/controllers/PA_Register_Sidebars.class.php');

require_once (dirname(__FILE__) . '/classes/widgets/PA_Widget_Apps.class.php');

/**
 * Customize the theme
 */
function pa_theme_support() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	
	remove_action('wp_head', 'wp_generator');

	/*
		Disable Emoji's
	*/
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );	
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );	
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	
	// Remove from TinyMCE
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );

	global $content_width;
	if ( ! isset( $content_width ) ) {
		$content_width = 856;
	}

}
add_action( 'after_setup_theme', 'pa_theme_support' );


function pa_wp_custom_menus() {
	register_nav_menu('pa-menu-default', __( 'PA - Menu - Default' ));
}
add_action( 'init', 'pa_wp_custom_menus' );

function pa_add_responsive_class($content){

	$content = mb_convert_encoding($content, 'HTML-ENTITIES', "UTF-8");
	$document = new DOMDocument();
	libxml_use_internal_errors(true);
	$document->loadHTML(utf8_decode($content));

	$imgs = $document->getElementsByTagName('img');
	foreach ($imgs as $img) {
	   $img->setAttribute('class','img-fluid');
	}

	$html = $document->saveHTML();
	return $html;
}
add_filter ('the_content', 'pa_add_responsive_class');


/**
 * Register and Enqueue Styles.
 */
function pa_register_assets() {
	wp_enqueue_style( 'bootstrap-style', get_template_directory_uri() . '/assets/node_modules/bootstrap/dist/css/bootstrap.min.css');
	wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
	wp_enqueue_style( 'pa-theme-sedes-style', get_template_directory_uri(). '/style.css', null);
	wp_enqueue_style( 'pa-theme-sedes-print', get_template_directory_uri() . '/print.css', null );

	wp_enqueue_script( 'fontawesome-js', 'https://kit.fontawesome.com/c992dc3e78.js', array(), false, false );
	wp_enqueue_script( 'scrips', get_template_directory_uri() . '/assets/js/script.js', array(), false, true );
}
add_action( 'wp_enqueue_scripts', 'pa_register_assets' );

function pa_register_assets_admin() {
	wp_enqueue_script( 'scrips', get_template_directory_uri() . '/assets/script_admin.js', array(), false, true );
}
add_action( 'admin_enqueue_scripts', 'pa_register_assets_admin' );

//Função auxiliar para imprimir no console o print_r.
function pconsole($var) {

	$s = json_encode($var);
	echo "<script>console.log(". $s . ");</script>";
	return;
}
// Função auxiliar para imprimir no console o echo.
function cconsole($var) {

	echo "<script>console.log('" . $var . "');</script>";
	return;
}

add_filter('acf/settings/save_json', function() {
	return get_stylesheet_directory() . '/acf-json';
});
  
add_filter('acf/settings/load_json', function($paths) {
	if(is_child_theme()) {
		$paths[] = get_template_directory() . '/acf-json';
	}
	return $paths;
});

// Define path and URL to the ACF plugin.
define( 'MY_ACF_PATH', get_template_directory() . '/acf/' );
define( 'MY_ACF_URL', get_template_directory_uri() . '/acf/' );

// Include the ACF plugin.
include_once( MY_ACF_PATH . 'acf.php' );

// Customize the url setting to fix incorrect asset URLs.
add_filter('acf/settings/url', 'my_acf_settings_url');
function my_acf_settings_url( $url ) {
    return MY_ACF_URL;
}

// // (Optional) Hide the ACF admin menu item.
// add_filter('acf/settings/show_admin', 'my_acf_settings_show_admin');
// function my_acf_settings_show_admin( $show_admin ) {
//     return true;
// }