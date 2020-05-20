window.onload = function(){
	document.querySelertionAll('td').foreach(function(td){
		td.addEventListener('mousehover',function(e){
			a.currentTarget.style.backgroundColor = '#eff';
		});

		td.addEventLitener('mouseout',function(e){
			e.currentTarget.style.backgroundcolor = '';
		});
	});
};