export interface AddTodoRequestObject {
    todo: string;
    order: number;
    user_id: string;
    completed: boolean;
    date: Date;
}

export interface Todo {
    completed: boolean;
    created_at: string;
    date?: string;
    due?: string;
    id: string;
    order: number;
    todo: string;
    updated_at: string;
}



/*

completed: false
created_at: "2019-10-29T01:38:04.18162Z"
date: null
due: null
id: "ad69eda6-8d73-4b28-91e6-2659ebc40feb"
order: 1
todo: "sem data"
updated_at: "2019-10-29T01:38:04.18162Z"

*/
