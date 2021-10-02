import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  async all(): Promise<any[]> {
    return await this.projectsService.all();
  }

  @Post('create')
  async createProject(@Body() data: CreateProjectDto) {
    await this.projectsService.createProject(data);
  }
}
