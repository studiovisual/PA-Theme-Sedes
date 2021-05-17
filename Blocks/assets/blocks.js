// import classnames from 'classnames';
(function(hooks, blocks) {
 
	/**
	 * WordPress Dependencies
	 */
	const { addFilter } = hooks;
	// const { hasBlockSupport } = window.wp.blocks;

	// const restrictedBlocks = [ 'core/freeform', 'core/shortcode', 'core/nextpage' ];
	// const blocksWithLinkToolbar = [ 'core/group', 'core/column', 'core/cover' ];

	/**
	 * Override props assigned to save component to inject atttributes
	 *
	 * @param {Object} extraProps Additional props applied to save element.
	 * @param {Object} blockType  Block type.
	 * @param {Object} attributes Current block attributes.
	 *
	 * @return {Object} Filtered props applied to save element.
	 */
	function applyExtraClass(extraProps, blockType, attributes) {
		switch(blockType.name) {
			case 'core/columns':
				extraProps.className = 'row';

				break;
		
			default:
				break;
		}

		// const {
		// 	editorskit,
		// 	isHeightFullScreen,
		// 	isFullWidth,
		// 	href,
		// 	hasAnimation,
		// } = attributes;

		// if ( typeof editorskit !== 'undefined' && ! restrictedBlocks.includes( blockType.name ) ) {
		// 	if ( typeof editorskit.id !== 'undefined' ) {
		// 		extraProps.className = classnames( extraProps.className, editorskit.id );
		// 	}

		// 	if ( typeof editorskit.desktop !== 'undefined' && ! editorskit.desktop ) {
		// 		extraProps.className = classnames( extraProps.className, 'editorskit-no-desktop' );
		// 	}

		// 	if ( typeof editorskit.tablet !== 'undefined' && ! editorskit.tablet ) {
		// 		extraProps.className = classnames( extraProps.className, 'editorskit-no-tablet' );
		// 	}

		// 	if ( typeof editorskit.mobile !== 'undefined' && ! editorskit.mobile ) {
		// 		extraProps.className = classnames( extraProps.className, 'editorskit-no-mobile' );
		// 	}

		// 	if ( typeof editorskit.tabletAlignment !== 'undefined' && editorskit.tabletAlignment ) {
		// 		extraProps.className = classnames( extraProps.className, 'has-tablet-text-align-' + editorskit.tabletAlignment );
		// 	}

		// 	if ( typeof editorskit.mobileAlignment !== 'undefined' && editorskit.mobileAlignment ) {
		// 		extraProps.className = classnames( extraProps.className, 'has-mobile-text-align-' + editorskit.mobileAlignment );
		// 	}
		// }

		// if ( hasBlockSupport( blockType.name, 'hasHeightFullScreen' ) && isHeightFullScreen ) {
		// 	extraProps.className = classnames( extraProps.className, 'h-screen' );
		// }

		// if ( hasBlockSupport( blockType.name, 'hasFullWidthDisplay' ) && isFullWidth ) {
		// 	extraProps.className = classnames( extraProps.className, 'ek-w-full' );
		// }

		// if (
		// 	( blocksWithLinkToolbar.includes( blockType.name ) ||
		// 		hasBlockSupport( blockType.name, 'editorsKitLinkToolbar' ) ) &&
		// 	typeof href !== 'undefined' &&
		// 	href
		// ) {
		// 	extraProps.className = classnames( extraProps.className, 'ek-linked-block' );

		// 	if ( typeof hasAnimation !== 'undefined' && hasAnimation ) {
		// 		extraProps.className = classnames( extraProps.className, 'ek-linked-block-animate' );
		// 	}
		// }

		return extraProps;
	}

	addFilter(
		'blocks.getSaveContent.extraProps',
		'applyExtraClass',
		applyExtraClass
	);

	// function setBlockCustomClassName(className, blockName) {
	// 	switch(blockName) {
	// 		case 'core/columns':
	// 			return 'row';
		
	// 		default:
	// 			return className;
	// 	}
	// }
	 
	// addFilter(
	// 	'blocks.getBlockDefaultClassName',
	// 	'my-plugin/class-names/list-block',
	// 	setBlockCustomClassName
	// );

	// wp.blocks.registerBlockVariation(
    //     'core/columns',
    //     {
    //         name: '70-30',
    //         title: 'Dos columnas 70-30',
    //         isDefault: false,
    //         attributes: {
    //             className: 'columnas-70-30'
    //         },
    //         innerBlocks: [
    //             [ 'core/column', { width: 70, className: 'ancho-70' }, [ [ 'acf/noticia-portada', { className: 'is-style-cover-white' } ], [ 'acf/noticia-portada' ] ] ],
    //             [ 'core/column', { width: 30, className: 'ancho-30' }, [ [ 'acf/noticia-portada' ], [ 'acf/noticia-portada' ] ] ]
    //         ],
    //         // icon: icon7030,
    //         scope: [ 'block' ]
    //     }
    // );

	// setTimeout(() => {
	// // 	console.table(blocks.getBlockVariations('core/columns'));
	// // 	wp.blocks.getBlockVariations('core/columns').forEach(function(blockVariation) {
	// // 		if(blockVariation.name != 'one-column-full')
	// // 			wp.blocks.unregisterBlockVariation('core/columns', blockVariation.name);
	// // 	});	
	// }, 2000);
	
	// wp.domReady(function () {
	// 	wp.blocks.unregisterBlockType('core/columns');
	// });

}) (
	wp.hooks, wp.blocks,
);