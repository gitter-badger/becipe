// Jquery with no conflict
jQuery(document).ready(function($) {
	
	
    //##########################################
	// Filter - Isotope 
	//##########################################
	
	$('#filter-buttons a').click(function(){
	
		// select current
		var $optionSet = $(this).parents('#filter-buttons');
	    $optionSet.find('.selected').removeClass('selected');
	    $(this).addClass('selected');
    
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});
	
	<!-- centered layout extension http://isotope.metafizzy.co/ --> 

	$.Isotope.prototype._getCenteredMasonryColumns = function() {
	
	    this.width = this.element.width();
	
	    var parentWidth = this.element.parent().width();
	
	    var colW = this.options.masonry && this.options.masonry.columnWidth || // i.e. options.masonry && options.masonry.columnWidth
	
	    this.$filteredAtoms.outerWidth(true) || // or use the size of the first item
	
	    parentWidth; // if there's no items, use size of container
	
	    var cols = Math.floor(parentWidth / colW);
	
	    cols = Math.max(cols, 1);
	
	    this.masonry.cols = cols; // i.e. this.masonry.cols = ....
	    this.masonry.columnWidth = colW; // i.e. this.masonry.columnWidth = ...
	};
	
	$.Isotope.prototype._masonryReset = function() {
	
	    this.masonry = {}; // layout-specific props
	    this._getCenteredMasonryColumns(); // FIXME shouldn't have to call this again
	
	    var i = this.masonry.cols;
	
	    this.masonry.colYs = [];
	        while (i--) {
	        this.masonry.colYs.push(0);
	    }
	};
	
	$.Isotope.prototype._masonryResizeChanged = function() {
	
	    var prevColCount = this.masonry.cols;
	
	    this._getCenteredMasonryColumns(); // get updated colCount
	    return (this.masonry.cols !== prevColCount);
	};
	
	$.Isotope.prototype._masonryGetContainerSize = function() {
	
	    var unusedCols = 0,
	
	    i = this.masonry.cols;
	        while (--i) { // count unused columns
	        if (this.masonry.colYs[i] !== 0) {
	            break;
	        }
	        unusedCols++;
	    }
	
	    return {
	        height: Math.max.apply(Math, this.masonry.colYs),
	        width: (this.masonry.cols - unusedCols) * this.masonry.columnWidth // fit container to columns that have been used;
	    };
	};

	//recipes	
	var $container = $('#filter-container');	
	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector : 'figure',
			cornerStampSelector: '.corner-stamp',
			filter: '*',
			isFitWidth: true
		});
	});
});



















