export interface Job {
    id:number;
    title:string;
    company_name: string;
    company_address: string;
    company_logo_url: string;
    description?: string;
    requirement?: string;
    qualification?: string;
    offer?: string;
    cityId: number;
    isDeleting: boolean;
}
