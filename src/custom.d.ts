type RecordItem = {
    currentTags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: Date; // createAt?: Date; 在属性后面添加问号，可以使得Record类型的变量定义时，不强制要有该属性
};