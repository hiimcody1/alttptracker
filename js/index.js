function load_cookie() {
	var c = document.cookie;
	
	if (c.indexOf('settings') > -1) {
		document.getElementById("remembersettings").checked = true;
		if (c.indexOf('m-M') > -1) {
			document.getElementById("mapyes").checked = true;
		}
		if (c.indexOf('m-C') > -1) {
			document.getElementById("mapsmall").checked = true;
		}
		if (c.indexOf('s-Y') > -1) {
			document.getElementById("sphereyes").checked = true;
		}
	}
}

function launch_tracker() {
	var type = document.querySelector('input[name="gametypegroup"]:checked').value;
	var entrance = document.querySelector('input[name="entrancegroup"]:checked').value;
	var boss = document.querySelector('input[name="bossgroup"]:checked').value;
	var enemy = document.querySelector('input[name="enemygroup"]:checked').value;
	var glitches = document.querySelector('input[name="glitchesgroup"]:checked').value;
	var dungeon = document.querySelector('input[name="dungeongroup"]:checked').value;
	var item = document.querySelector('input[name="placementgroup"]:checked').value;
	var goal = document.querySelector('input[name="goalgroup"]:checked').value;
	var tower = document.querySelector('input[name="towergroup"]:checked').value;
	var ganon = document.querySelector('input[name="ganongroup"]:checked').value;
	var towersel = document.getElementById("towerselect");
	var towercrystals = towersel.options[towersel.selectedIndex].value;
	var ganonsel = document.getElementById("ganonselect");
	var ganoncrystals = ganonsel.options[ganonsel.selectedIndex].value;
	var swords = document.querySelector('input[name="swordsgroup"]:checked').value;
	var spritesel = document.getElementById("spriteselect");
	var sprite = spritesel.options[spritesel.selectedIndex].value;
	var map = document.querySelector('input[name="mapgroup"]:checked').value;
	var spoiler = document.querySelector('input[name="spoilergroup"]:checked').value;
	var sphere = document.querySelector('input[name="spheregroup"]:checked').value;
	
	var width = map === "M" ? 1340 : 448;
	var height = sphere === "Y" ? map === "C" ? 988 : 744 : map === "C" ? 692 : 448;
	
	if (document.getElementById("remembersettings").checked == true) {
		var settings = "m-" + map + "|s-" + sphere;
		document.cookie = "settings=" + settings + "; expires=Sat, 1 Jan 2023 12:00:00 UTC";
	} else {
		document.cookie = "settings=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	}
	
	var trackerWindow = window.open('tracker.html?f={type}{entrance}{boss}{enemy}{glitches}{dungeon}{item}{goal}{tower}{towercrystals}{ganoncrystals}{ganon}{swords}{map}{spoiler}{sphere}&sprite={sprite}'
			.replace('{type}', type)
			.replace('{entrance}', entrance)
			.replace('{boss}', boss)
			.replace('{enemy}', enemy)
			.replace('{glitches}', glitches)
			.replace('{dungeon}', dungeon)
			.replace('{item}', item)
			.replace('{goal}', goal)
			.replace('{tower}', tower)
			.replace('{towercrystals}', towercrystals)
			.replace('{ganon}', ganon)
			.replace('{ganoncrystals}', ganoncrystals)
			.replace('{swords}', swords)
			.replace('{map}', map)
			.replace('{spoiler}', spoiler)
			.replace('{sphere}', sphere)
			.replace('{sprite}', sprite),
		'',
		'width={width},height={height},titlebar=0,menubar=0,toolbar=0,scrollbars=0,resizable=0'
			.replace('{width}', width).replace('{height}', height));
}
