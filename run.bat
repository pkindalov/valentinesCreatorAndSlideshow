@echo off
echo function getPics(){ return [ > scripts/pics.js
for  %%i in (pictures/*) do (
	echo 'pictures/%%i',>> scripts/pics.js
	/*8echo "<img src='pictures/%%i' alt='pictures/%%i' />",>> scripts/pics.js*/
)
echo ]} >> scripts/pics.js

echo function getMusic(){ return [ > scripts/music.js
for %%i in (music/*) do (
    echo 'music/%%i', >> scripts/music.js
)

echo ]} >> scripts/music.js

gallery.html