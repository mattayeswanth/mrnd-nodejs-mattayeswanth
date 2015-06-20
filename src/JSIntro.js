
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var add=0,i;
	for(i=0;i<arrayOfNums.length;i++)
	      add=add+arrayOfNums[i];
	return add;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var i,j,flag=0,add=0;
	for(i=0;i<arrayOfNums.length;i++)
	{
		for(j=0;j<i;j++)
		{
			if(arrayOfNums[i]==arrayOfNums[j])
			{
				flag=1;
				break;
			}
		}
		if(flag==0)
		  add=add+arrayOfNums[i];
	    flag=0;
	}
	return add;
}

exports.ReverseString = function(str){
	
	var i,temp="";
	for(i=str.length-1;i>=0;i--)
	{
		temp=temp+str[i];
	}
    return temp;
	
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
    arrayOfStrings.reverse();
    return arrayOfStrings;
	

}