#expansions are covered in this file
name="Hello world, This is AJAY"
this="This"
echo $name
# echo ${name}
# echo "this is a string baby: ${name}"
#indirection
# echo ${!name}

#casemodification
# echo ${name ^}
# echo ${name^^}
# echo ${name,}
# echo ${name,,}
# echo ${name~}
# echo ${name~~}

#string length
echo ${#name}
# echo ${name##" This"} #ye nahi chalra frandss :'(
echo ${name/"AJAY"/"CHEEKU"}
echo ${name/"AJAY"}

#substring expansion
echo ${name:OFFSET}
