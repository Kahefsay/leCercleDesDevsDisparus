import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionFilter',
  pure: false
})
export class DescriptionPipe implements PipeTransform {
  transform(items: any[], ...args): any {
    if (!items) {
      return items;
    }

    items.forEach((item) => {
      item.description.slice(0, 150);
    });
    return items;
  }
}
