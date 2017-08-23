#!/usr/bin/env bash
odd=(1 3 5 7 9)

# echo ${@:1:2}

odd=(${odd[*]} 11 13 15 17)
echo ${odd[*]}
echo ${odd[*]:3:2}
unset odd[0]
echo ${odd[*]}
