import React from 'react'

export const VideoAsses = () => {
 let a=13,b=14,c=20;

 let max;
 if(a>b && a>c){
    max=a;
 }
 if(b>a && b>c){
    max=b;
 }
 if(c>a && c>b){
    max=c
 }

 console.log(max)
}
