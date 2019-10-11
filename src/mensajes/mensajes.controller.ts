import { Controller, Post, Get, Put,Body, Delete } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import {create} from 'domain';

@Controller('mensajes')
export class MensajesController {
    @Post()
    create(@Body () createMensajeDto: CreateMensajeDto){
        return 'mensaje creado';
    }

    @Get()
    getAll() {
        return  'Lista de mensajes';
    }
    @Put(':id')
    update(@Body() updateMensaje: CreateMensajeDto){
        return ' Mensaje actualizado';
    }

    @Delete(':id')
    delete() {
        return 'mensaje Eliminado';
    }
}
