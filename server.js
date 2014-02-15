var sys		= require('sys');
var count 	= 0;

sys.debug("Starting ...");

function tick() 																	{
	count	= count+1;
	sys.debug("Tick count: " + count);
	if (++count < 10) setTimeout(tick, 1000);
	else sys.debug("...stoped!");
}

tick();