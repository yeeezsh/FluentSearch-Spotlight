import { Args, Query, Resolver } from '@nestjs/graphql';
import { FileInsightDto } from './dto/file-insight.dto';
import { FileInsightMeta } from './dto/file-meta.dto';
import { FileVideoInsightDto } from './dto/file-video-insight.dto';
import { SearchDTO } from './dto/search.dto';
import { SpotlightService } from './spotlight.service';

@Resolver()
export class SpotlightResolver {
  constructor(private readonly spotlightService: SpotlightService) {}
  @Query(() => FileInsightDto)
  async GetFileImageInsight(@Args('fileId') fileId: string) {
    return this.spotlightService.getFileImageInsight(fileId);
  }

  @Query(() => FileVideoInsightDto)
  async GetFileVideoInsight(
    @Args('fileId') fileId: string,
  ): Promise<FileVideoInsightDto> {
    return this.spotlightService.getFileVideoInsight(fileId);
  }

  @Query(() => SearchDTO)
  async GetSearch(
    @Args('owner') owner: string,
    @Args('word') word: string,
  ): Promise<SearchDTO> {
    const res = await this.spotlightService.searchByKeyword(owner, word);
    return {
      results: res as unknown as FileInsightMeta,
    };
  }
}
