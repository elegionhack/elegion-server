import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { AddWorkersInProjectDto } from './dto/add-workers-in-project.dto';

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

  @Post('add')
  async addInProject(@Body() data: AddWorkersInProjectDto) {
    await this.projectsService.addWorkersInProject(
      data.workers,
      data.projectId,
    );
  }

  @Get(':id')
  async getProject(@Param('id') id) {
    return await this.projectsService.getProject(id);
  }
}
