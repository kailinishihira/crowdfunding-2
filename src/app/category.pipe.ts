import { Pipe, PipeTransform } from '@angular/core';
import { FundraiserListComponent } from './fundraiser-list/fundraiser-list.component';
import { Fundraiser } from './fundraiser.model';

@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: Fundraiser[], filterByCategory)
  {
    var output = [];
    var outputMessage = [];
    if(filterByCategory === "medical")
    {
      for(var i=0; i<input.length; i++)
      {
        if(input[i].category === "Medical")
        {
          output.push(input[i]);
        }
      }
    return output;
  }

    else if(filterByCategory === "education")
    {
      for(var i=0; i<input.length; i++)
      {
        if(input[i].category === "Education")
        {
          output.push(input[i]);
        }
      }
       return output;
    }
    else if(filterByCategory === "business")
    {
      for(var i=0; i<input.length; i++)
      {
        if(input[i].category === "Business")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(filterByCategory === "charity")
    {
      for(var i=0; i<input.length; i++)
      {
        if(input[i].category === "Charity")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(filterByCategory === "animals")
    {
      for(var i=0; i<input.length; i++)
      {
        if(input[i].category === "Animals")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else 
    {
      return input;
    }
  }
}
