# JQuery Code Review - User input list of favorite things

##### JQuery Code Review, written for the Summer 2015 Intro to Programming class, 10/9/2015

#### By Midori Bowen

## Description

This is a webpage where a user can create a list of their favorite things by submitting a form.

## Setup

* To make the second header tag italic, a different indentation from the other header tags, and all caps ("Favorite"), I selected it specifically in the styles.css file with .jumbotron h1:nth-child(2).
* I didn't like the way that the form ended and the submitted list began (with no room between), so I added margins at the bottom of the form tag and at the top of the id "favorite-things".
* I had a lot of trouble fitting the image in the jumbotron header and after a lot of fiddling around, decided that it looked okay, but I definitely wanted to make the image responsive.
* For text box as found under the "Favorite childhood memory" input, I used textarea instead of input and replaced input in the Javascript as well with textarea.

## Technologies Used

* JQuery - uncompressed, development jQuery 1.11.3
* Bootstrap v.3.3.5
* Javascript

### Links

https://midoribowen.github.io/jquery

### Legal

Copyright (c) 2015 Midori Bowen

This software is licensed under the Epicodus Student License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
