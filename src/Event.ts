import Entity from './Entity';
import { Optional } from './Optional';

export interface Constructor<EntityType extends Entity<EntityType>, EventType extends Event<EntityType>> {
    new (...args: any[]): EventType;
    Priority?: number;
}

export default class Event<EntityType extends Entity<EntityType>> {
    
    private m_entity?: EntityType;
    
    public get entity(): Optional<EntityType> {
        return this.m_entity;
    }
    
    public constructor(entity?: EntityType) {
        this.m_entity = entity;
    }
    
}