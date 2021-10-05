@if(is_admin())
	<img class="img-preview" src="{{ get_template_directory_uri() }}/Blocks/PAFacebook/preview.png" />
@else
	<div class="pa-widget pa-w-facebook col col-md-4 mb-5">
		@notempty($title)
			<h2>{!! $title !!}</h2>
		@endnotempty

		@notempty($url)
			<div 
				data-href={{ $url }}
				class="fb-page" 
				data-tabs="timeline" 
				data-height="" 
				data-small-header="false" 
				data-adapt-container-width="true"
				data-hide-cover="false" 
				data-width="500" 
				data-show-facepile="true"
				data-lazy="true"
			></div>
		@endnotempty
	</div>
@endif