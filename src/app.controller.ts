import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {
    return;
  }

  @Get()
  @Render('home')
  index() {
    return {};
  }

  @Get('/contact')
  @Render('contact')
  contact() {
    return {
      title: 'My contact',
      emails: ['123@gmail.com', '456@gmail.com'],
      phone: '22132131',
      emailsVisible: true,
    };
  }

  @Get('/comment')
  @Render('comments')
  comment() {
    return {
      title: 'Comments',
      person: {
        firstname: 'Aliaksei',
        lastname: 'Machulis',
      },
    };
  }
}
