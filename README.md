nodestacktrace
=========

A small library to get line number by __line, function name by __function

## Installation

  npm install nodestacktrace --save

## Usage
function example(){
	console.log('LineNumber: ', __line);
	console.log('Function Name: ', __function);
}