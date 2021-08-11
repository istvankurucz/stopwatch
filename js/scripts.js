$(document).ready(function () {
	let timeSinceReset = 0;
	let interval;

	let minutes, seconds, milis;

	const updateTimer = () => {
		timeSinceReset += 50;

		minutes = Math.floor(timeSinceReset / 60000);
		seconds = Math.floor((timeSinceReset - minutes * 60000) / 1000);
		milis = Math.floor(timeSinceReset - minutes * 60000 - seconds * 1000);

		if (seconds < 10) seconds = `0${seconds}`;
		else seconds = seconds.toString();

		if (milis < 10) milis = `0${milis}`;
		else milis = milis.toString();

		if (minutes < 10) minutes = `0${minutes}`;
		else minutes = minutes.toString();

		if (minutes > 0) {
			$(".minutes").css("display", "inline");
			$(".minutes").text(`${minutes} :`);
		} else $(".minutes").css("display", "none");

		$(".seconds").text(`${seconds} :`);
		$(".milis").text(`${milis.substr(0, 2)}`);
	};

	$(".start").click(function () {
		interval = setInterval(updateTimer, 50);
	});
	$(".stop").click(function () {
		clearInterval(interval);
	});
	$(".reset").click(function () {
		clearInterval(interval);

		timeSinceReset = 0;

		$(".minutes").css("display", "none");
		$(".seconds").text(`00 :`);
		$(".milis").text(`00`);
	});
});
