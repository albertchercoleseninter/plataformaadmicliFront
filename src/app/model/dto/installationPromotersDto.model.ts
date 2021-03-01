import {Promoter} from '../domain/promoter';
import {InstallationDto} from './installationDto.model';

export class InstallationPromotersDto{
constructor(private promoterDtoList: Promoter[], private installationDto: InstallationDto ){
}
}
