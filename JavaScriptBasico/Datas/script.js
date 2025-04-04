//Precisamos respeitar a ordem definida, pois foi a ordem das propriedades colocadas na criação do objeto data
var d = new Date(); //exibe a data atual começando pelo dia da semana, mês, dia, ano e horário
console.log(d)

//Podemos criar uma data específica, passando os valores que queremos como argumentos para as propriedades do objeto data
var data1 = new Date(2018, 8, 12)
console.log(data1)

//Podemos criar com string também
var data2 = new Date('sep 05 2017 23:35')
console.log(data2)

//O objeto data possui alguns métodos que podem ser uteis para a manipulção desses dados
console.log(d.getFullYear()) //pega o ano
console.log(d.getDate()) //Pega o dia
console.log(d.getDay())// Pega o dia da semana de 0 a 6, sendo 0 domingo e 6 sábado
console.log(d.getHours())// Pega as horas
console.log(d.getMinutes()) // Pega os minutos

// Formas de instanciar uma Data:

// var d = new Date();
// var d = new Date(milliseconds);
// var d = new Date(dateString);
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);​



// ​Métodos para manipular datas:

// getDate()	Returns the day of the month (from 1-31)
// getDay()	Returns the day of the week (from 0-6)
// getFullYear()	Returns the year
// getHours()	Returns the hour (from 0-23)
// getMilliseconds()	Returns the milliseconds (from 0-999)
// getMinutes()	Returns the minutes (from 0-59)
// getMonth()	Returns the month (from 0-11)
// getSeconds()	Returns the seconds (from 0-59)
// getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
// getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
// getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
// getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
// getUTCFullYear()	Returns the year, according to universal time
// getUTCHours()	Returns the hour, according to universal time (from 0-23)
// getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
// getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
// getUTCMonth()	Returns the month, according to universal time (from 0-11)
// getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
// getYear()	Deprecated. Use the getFullYear() method instead
// now()	Returns the number of milliseconds since midnight Jan 1, 1970
// parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
// setDate()	Sets the day of the month of a date object
// setFullYear()	Sets the year of a date object
// setHours()	Sets the hour of a date object
// setMilliseconds()	Sets the milliseconds of a date object
// setMinutes()	Set the minutes of a date object
// setMonth()	Sets the month of a date object
// setSeconds()	Sets the seconds of a date object
// setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
// setUTCDate()	Sets the day of the month of a date object, according to universal time
// setUTCFullYear()	Sets the year of a date object, according to universal time
// setUTCHours()	Sets the hour of a date object, according to universal time
// setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
// setUTCMinutes()	Set the minutes of a date object, according to universal time
// setUTCMonth()	Sets the month of a date object, according to universal time
// setUTCSeconds()	Set the seconds of a date object, according to universal time
// setYear()	Deprecated. Use the setFullYear() method instead
// toDateString()	Converts the date portion of a Date object into a readable string
// toGMTString()	Deprecated. Use the toUTCString() method instead
// toISOString()	Returns the date as a string, using the ISO standard
// toJSON()	Returns the date as a string, formatted as a JSON date
// toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
// toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
// toLocaleString()	Converts a Date object to a string, using locale conventions
// toString()	Converts a Date object to a string
// toTimeString()	Converts the time portion of a Date object to a string
// toUTCString()	Converts a Date object to a string, according to universal time
// UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
// valueOf()	Returns the primitive value of a Date object