main()

function main(){
	test();
}

function test(){
	$("#en").click(function(){
		update_en_language();
	});
	
	$("#zh").click(function(){
		update_zh_language();
	})
}

function update_en_language(){
	$.i18n.init({
		lng: 'en',
		resGetPath : './js/language/locales/__lng__/__ns__.json'
	}, function(err, t){
		$("#henu").text($.i18n.t('message'))
	});
}


function update_zh_language(){
	$.i18n.init({
		lng: 'zh',
		resGetPath : './js/language/locales/__lng__/__ns__.json'
	}, function(err, t){
		$("#henu").text($.i18n.t('message'))
	});
}

