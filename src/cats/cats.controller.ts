import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import type { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  // response cycle
  findAll(@Query() CreateCatDto: CreateCatDto) {
    if (CreateCatDto.age || CreateCatDto.breed) {
      return `This action returns all cats filtered by age: ${CreateCatDto.age} and breed ${CreateCatDto.breed}`;
    }
    return 'this action returns all cats, funny enough i found out, it ought not to have a fixed name';
  }

  // request circle
  @Get('breed')
  findBreed(@Req() request: Request) {
    //  response.status(200).send('hello')
    const body = request.query.name;
    return body;
  }

  // resource circle
  @Post('simple')
  create(): string {
    return 'this adds a new cat';
  }

  //Rpute wildcards, pure express wildcard might need abcd/*name
  @Get('abcd/*')
  findit() {
    return 'this route uses a wildcard!';
  }

  //status code isn't static, in such case it is better to inject library specific response @Res
  @Post('http')
  @HttpCode(204)
  httpCode() {
    return 'This action adds a new cat';
  }

  //response headers -- use @Header or res.header
  @Post('header')
  @Header('Cache-control', 'no-store')
  header(): string {
    return 'This acxtion adds a new cat while chcking header';
  }

  //redirection -- @Redirect(url, statcode) or res.redirect()
  @Get('redirect')
  @Redirect('http://localhost:3000/dogs', 302)
  getDocs(@Query('version') version?: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  //route parameters can as well pass in a value to @Param
  @Get(':id')
  getOne(@Param('id') id: string): string {
    console.log(id);
    return `This actions returns a cat with the id of #${id}`;
  }

  //sub-domain routing

  // @Controller({ host: 'admin.example.com' })
  // export class AdminController {
  //   @Get()
  //   index(): string {
  //     return 'Admin page';
  //   }
  // }

  //TODO state sharing -- Injection scopes

  //TODO Asynchronicity async & Await & observables

  // Request PAyloads
  @Post()
  createCat(@Body() CreateCatDto: CreateCatDto) {
    const age = CreateCatDto.age;
    return age;
  }

  // full resource example

  // export class CatsController {
  // @Post()
  // create(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send();
  // }

  // @Get()
  // findAll(@Res() res: Response) {
  //    res.status(HttpStatus.OK).json([]);
  // }
}
