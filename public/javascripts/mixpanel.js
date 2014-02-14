$(document).ready(function() {
	mixpanel.track("Landing Page Loaded");

	// Navbar links
	$("a[href='#home']").click(function() {
		mixpanel.track("Menu: Home");
	});

	$("a[href='#how']").click(function() {
		mixpanel.track("Menu: How it works");
	});

	$("a[href='#pricing']").click(function() {
		mixpanel.track("Menu: Pricing");
	});

	$("a[href='#features']").click(function() {
		mixpanel.track("Menu: Features");
	});

	$("a[href='#FAQ']").click(function() {
		mixpanel.track("Menu: FAQ");
	});

	// Emails submission
	$("button#saveForm").click(function() {
		mixpanel.track("Email submission")
	});

	// Twitter share
	$(".twitter-share-button").click(function() {
		mixpanel.track("Twitter share");
	})

});