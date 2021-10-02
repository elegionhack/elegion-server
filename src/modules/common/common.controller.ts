import { Controller, Get } from '@nestjs/common';

@Controller('common')
export class CommonController {
  @Get('book')
  bookText() {
    return `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac interdum mi. Suspendisse a risus fringilla, faucibus leo et, blandit tellus. Vestibulum facilisis ex nisi, eget tincidunt turpis dictum a. Nam porta, diam quis commodo fringilla, mi quam posuere quam, 
      ac pretium purus urna a elit. Proin nec libero ac arcu rutrum suscipit. Suspendisse potenti. Morbi congue fermentum ullamcorper. Nullam feugiat vestibulum nisi at condimentum. Nulla finibus ligula vitae ante tempus dictum. Ut eleifend tellus in aliquam ornare. Suspendisse aliquam vestibulum tellus, id vulputate mi dapibus interdum.
      
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sollicitudin ante ac velit bibendum pharetra. Vivamus risus purus, auctor nec augue eget, ultrices suscipit nisi. Quisque et augue pellentesque purus euismod pretium. Mauris placerat pellentesque libero. Nullam et libero hendrerit, suscipit 
      est vitae, egestas leo. Nunc sagittis luctus lectus ac blandit. Praesent cursus felis lectus, et faucibus erat semper id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus id bibendum massa. Nullam volutpat neque sed magna convallis tempor. Morbi metus leo, lacinia sit amet neque eget, rutrum lacinia metus.

      Quisque sed suscipit ipsum. Suspendisse finibus nunc consequat eros cursus, ultrices porta lorem vulputate. Duis a dui pharetra, pretium purus sit amet, varius nisl. Mauris metus nibh, lacinia vel ipsum a, condimentum auctor turpis. Etiam at eleifend leo, vel interdum neque. Cras vel tincidunt massa. Quisque pretium lorem augue. Etiam condimentum aliquet lorem,
       ac volutpat odio. Nullam molestie iaculis pretium. Integer in aliquet mi.
    `;
  }
}
