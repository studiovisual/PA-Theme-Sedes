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
				console.log(attributes);
				extraProps.className = 'row';

				break;
		
			default:
				break;
		}

	// 	// const {
	// 	// 	editorskit,
	// 	// 	isHeightFullScreen,
	// 	// 	isFullWidth,
	// 	// 	href,
	// 	// 	hasAnimation,
	// 	// } = attributes;

	// 	// if ( typeof editorskit !== 'undefined' && ! restrictedBlocks.includes( blockType.name ) ) {
	// 	// 	if ( typeof editorskit.id !== 'undefined' ) {
	// 	// 		extraProps.className = classnames( extraProps.className, editorskit.id );
	// 	// 	}

	// 	// 	if ( typeof editorskit.desktop !== 'undefined' && ! editorskit.desktop ) {
	// 	// 		extraProps.className = classnames( extraProps.className, 'editorskit-no-desktop' );
	// 	// 	}

	// 	// 	if ( typeof editorskit.tablet !== 'undefined' && ! editorskit.tablet ) {
	// 	// 		extraProps.className = classnames( extraProps.className, 'editorskit-no-tablet' );
	// 	// 	}

	// 	// 	if ( typeof editorskit.mobile !== 'undefined' && ! editorskit.mobile ) {
	// 	// 		extraProps.className = classnames( extraProps.className, 'editorskit-no-mobile' );
	// 	// 	}

	// 	// 	if ( typeof editorskit.tabletAlignment !== 'undefined' && editorskit.tabletAlignment ) {
	// 	// 		extraProps.className = classnames( extraProps.className, 'has-tablet-text-align-' + editorskit.tabletAlignment );
	// 	// 	}

	// 	// 	if ( typeof editorskit.mobileAlignment !== 'undefined' && editorskit.mobileAlignment ) {
	// 	// 		extraProps.className = classnames( extraProps.className, 'has-mobile-text-align-' + editorskit.mobileAlignment );
	// 	// 	}
	// 	// }

	// 	// if ( hasBlockSupport( blockType.name, 'hasHeightFullScreen' ) && isHeightFullScreen ) {
	// 	// 	extraProps.className = classnames( extraProps.className, 'h-screen' );
	// 	// }

	// 	// if ( hasBlockSupport( blockType.name, 'hasFullWidthDisplay' ) && isFullWidth ) {
	// 	// 	extraProps.className = classnames( extraProps.className, 'ek-w-full' );
	// 	// }

	// 	// if (
	// 	// 	( blocksWithLinkToolbar.includes( blockType.name ) ||
	// 	// 		hasBlockSupport( blockType.name, 'editorsKitLinkToolbar' ) ) &&
	// 	// 	typeof href !== 'undefined' &&
	// 	// 	href
	// 	// ) {
	// 	// 	extraProps.className = classnames( extraProps.className, 'ek-linked-block' );

	// 	// 	if ( typeof hasAnimation !== 'undefined' && hasAnimation ) {
	// 	// 		extraProps.className = classnames( extraProps.className, 'ek-linked-block-animate' );
	// 	// 	}
	// 	// }

		return extraProps;
	}

	// addFilter(
	// 	'blocks.getSaveContent.extraProps',
	// 	'applyExtraClass',
	// 	applyExtraClass
	// );

	function setBlockCustomClassName(className, blockName) {
		switch(blockName) {
			case 'core/columns':
				className = 'row'

				break;
			case 'core/column':
				className = 'col-12'

				break;
			default:
				break;
		}
		
		return className;
	}
	
	// Adding the filter
	wp.hooks.addFilter(
		'blocks.getBlockDefaultClassName',
		'setBlockCustomClassName',
		setBlockCustomClassName
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

	setTimeout(() => {
		blocks.getBlockVariations('core/columns').forEach((blockVariation) => blocks.unregisterBlockVariation('core/columns', blockVariation.name));	

		blocks.registerBlockVariation(
			'core/columns',
			{
				name: '100',
				title: 'Uma coluna',
				isDefault: true,
				innerBlocks: [
					[ 'core/column', ],
				],
				icon: wp.element.createElement(
					'svg', 
					{ width: 48, height: 48 },
					wp.element.createElement(
						'path', { 
							fillRule: 'evenodd',
							clipRule: 'evenodd',
							d: "m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z" 
						}
					)
				),
				scope: [ 'block' ]
			}
		);
	
		blocks.registerBlockVariation(
			'core/columns',
			{
				name: '66-33',
				title: 'Duas colunas 66/33',
				isDefault: false,
				innerBlocks: [
					[ 'core/column', { className: 'col-lg-8' }, ], 
					[ 'core/column', { className: 'col-lg-4' }, ],
				],
				icon: wp.element.createElement(
					'svg', 
					{ width: 48, height: 48 },
					wp.element.createElement(
						'path', { 
							fillRule: 'evenodd',
							clipRule: 'evenodd',
							d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z" 
						}
					)
				),
				scope: [ 'block' ]
			}
		);
	
		blocks.registerBlockVariation(
			'core/columns',
			{
				name: '33-33-33',
				title: 'Três colunas 33/33/33',
				isDefault: false,
				innerBlocks: [
					[ 'core/column', { className: 'col-lg-4' }, ], 
					[ 'core/column', { className: 'col-lg-4' }, ],
					[ 'core/column', { className: 'col-lg-4' }, ],
				],
				icon: wp.element.createElement(
					'svg', 
					{ width: 48, height: 48 },
					wp.element.createElement(
						'path', { 
							fillRule: 'evenodd',
							d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20zZ" 
						}
					)
				),
				scope: [ 'block' ]
			}
		);
	
		blocks.registerBlockVariation(
			'core/columns',
			{
				name: '33-66',
				title: 'Duas colunas 33/66',
				isDefault: false,
				innerBlocks: [
					[ 'core/column', { className: 'col-lg-4' }, ], 
					[ 'core/column', { className: 'col-lg-8' }, ],
				],
				icon: wp.element.createElement(
					'svg', 
					{ width: 48, height: 48 },
					wp.element.createElement(
						'path', { 
							fillRule: 'evenodd',
							clipRule: 'evenodd',
							d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z" 
						}
					)
				),
				scope: [ 'block' ]
			}
		);
		// wp.data.subscribe(() => {
		// 	console.log(wp.data.select('core/editor').getSelectedBlock());
		// });
	}, 1000);

	var el = wp.element.createElement;
 
var withInspectorControls = wp.compose.createHigherOrderComponent( function (
    BlockEdit
) {
    return function ( props ) {
		console.log(props);
        return el(
            wp.element.Fragment,
            {},
            el( BlockEdit, props ),
            el(
                'style',
                {
					
				}
            )
        );
    };
},
'withInspectorControls' );
 
// wp.hooks.addFilter(
//     'editor.BlockEdit',
//     'my-plugin/with-inspector-controls',
//     withInspectorControls
// );

}) (
	wp.hooks, wp.blocks, wp.data
);