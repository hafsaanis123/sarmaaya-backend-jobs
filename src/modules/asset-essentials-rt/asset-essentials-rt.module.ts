import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetEssentialsRealTimeEntity, AssetEssentialsWithoutRealTimeEntity } from 'lib-typeorm';
import { AssetEssentialsRtService } from './asset-essentials-rt.service';
import { JobModule } from 'src/jobs/job.module';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AssetEssentialsRealTimeEntity,
      AssetEssentialsWithoutRealTimeEntity
    ]),
    forwardRef(() => JobModule),
  ],
  providers: [AssetEssentialsRtService],
  exports: [AssetEssentialsRtService],
})
export class AssetEssentialsRtModule {}
