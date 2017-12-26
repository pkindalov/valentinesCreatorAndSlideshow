@echo off
echo var pics = [ > pics.js
for  %%i in (pics/*) do (
	echo '%%i',>>pics.js
)
echo ] >> pics.js
index.html