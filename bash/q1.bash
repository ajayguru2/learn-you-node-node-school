#!/usr/bin/env bash
# one="${@:1:2}"
# two="${@:3:2}"
#
# answer=${one[1]}
# echo $answer

INA=${@:1:2}
INB=${@:3:2}
RESULT=(${INA[1]}*${INB[1]})
echo $RESULT
