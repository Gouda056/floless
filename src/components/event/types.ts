export interface videoDataInterface {
    id: number;
    url_code: string;
    preview_url: string;
    ispreview: boolean;
    optimized: boolean;
    autoplay_video: string;
    description: string;
    event_id: string;
    iframe: string;
    is_preview_video: boolean;
    is_thumbnail: boolean;
    is_title: boolean;
    preview_video: string;
    size: number;
    thumbnail: string;
    title: string;
    type: string;
    url: string;
    user_id: number;
};
export interface eventDatainterface {
    date: string;
    description: string | null;
    display_image: string | null;
    event_id: number;
    event_name: string;
    event_type: string;
    event_type_id: number;
    id: number;
    location: null | string;
    name: string;
    password: string | null;
    preview_link: string | null;
    private: boolean;
    production_status: string;
    sub_event_id: number| null;
    watermark: null | string;
}
