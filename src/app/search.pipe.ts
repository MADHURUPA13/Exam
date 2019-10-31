import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string) {
 if(!args){
   return value;

 }
 return value.filter(vare=>{
   const title=vare.title.toLowerCase().includes(args.toLowerCase());
   return (title);
 })













    // return value.filter(it=>
    //   {
    //     if(!args){
    //       return value;
    //     }
    //     const title=it.title.toLowerCase().startsWith(args.toLowerCase());
    //     console.log("search value from the table",title);
    //     return title;
    //   })
  }

}
