<?php

namespace Blocks\PAFacebookFeature;

use Blocks\Block;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Url;

/**
 * PAFacebookFeature Facebook feature block
 */
class PAFacebookFeature extends Block {

    public function __construct() {
		// Set block settings
        parent::__construct([
            'title' 	  => 'Facebook - Feature',
            'description' => 'Facebook Widget',
            'category' 	  => 'pa-adventista',
            'post_types'  => ['post', 'page'],
			'keywords' 	  => ['facebook', 'embeded'],
			'icon' 		  => '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.124 96.123" role="img" aria-hidden="true" focusable="false"><g>
			<path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
				c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
				c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
				c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
			</g></svg>',
        ]);
    }
	
	/**
	 * setFields Register ACF fields with WordPlate/Acf lib
	 *
	 * @return array Fields array
	 */
	protected function setFields(): array {
		return 
			[
				Text::make('Título', 'title'),
                Url::make('Url', 'url'),
			];
	}
	    
    /**
     * with Inject fields values into template
     *
     * @return array
     */
    public function with(): array {
        return [
            'title'  => field('title'),
			'url' => field('url')
        ];
    }
}