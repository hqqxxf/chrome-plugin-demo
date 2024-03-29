chrome.runtime.onInstalled.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					// 只有打开Google才显示pageAction
					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'https://translate.google.cn'}})
				],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}
		])
	})
})
