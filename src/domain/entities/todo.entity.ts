

export class TodoEntity{

    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date | null
    ){}
    
    get isCompleted(): boolean {
        return !!this.completedAt;

    }

    public static fromObject(object: { [key: string]: any }): TodoEntity {
        const { id, text, completedAt } = object;
        if (!id) throw new Error('id is required');
        if (!text) throw new Error('text is required');

        let newCompletedAt = null;
        if (completedAt) {
            newCompletedAt = new Date(completedAt);
            if (isNaN(newCompletedAt.getTime())) throw new Error('completedAt is not a valid date');
        }

        // Al pasar newCompletedAt aquí, se asigna a la propiedad de arriba
        return new TodoEntity(id, text, newCompletedAt);
    }




}