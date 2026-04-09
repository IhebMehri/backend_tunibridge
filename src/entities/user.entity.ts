import {Column, CreateDateColumn, Entity,OneToMany,PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable} from "typeorm"
import { UserRole, UserStatus } from "../enums/user.enum"
import { Parcours } from "./parcours.entity"
import { Event } from "./event.entity"
import { Formation } from "./formation.entity"


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    firstname : string

    @Column()
    lastname : string

    @Column({unique:true})
    email : string
    
    @Column()
    password : string 

    @Column()
    birthday : Date 

    @Column({
        type: "enum",
        enum : UserStatus,
        default:UserStatus.ACTIVE
    })
    status : UserStatus 

    @Column({nullable: true })
    avatar : string 

    @CreateDateColumn()
    createdAt : Date 
    
    @UpdateDateColumn()
    updateddAt : Date

    @Column({
        type: "enum",
        enum : UserRole,
        default:UserRole.STUDENT
        
    }) 
    role : UserRole

    @OneToMany(() => Parcours, parcours => parcours.user)
    parcours: Parcours[]

    @ManyToMany(() => Event, event => event.users)
    @JoinTable()
    events: Event[]

    @ManyToMany(() => Formation, formation => formation.users)
    @JoinTable()
    formations: Formation[]

}