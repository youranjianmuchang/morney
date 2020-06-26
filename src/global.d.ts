type RecordItem = {
    currentTags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: string; // createAt?: Date; 在属性后面添加问号，可以使得Record类型的变量定义时，不强制要有该属性
};

type Tag = {
    id: string;
    name: string;
}

type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    save: () => void;
    remove: (id: string) => boolean;
}

type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}
