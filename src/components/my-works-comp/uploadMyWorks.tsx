import { Dialog } from "@mui/material";
interface props {
    open: boolean;
    handleClose: () => void;
}

export default function UploadMyWorks ({open, handleClose}: props) {
    return (
        <Dialog open={open} onClose={handleClose}>
            
        </Dialog>
    )
}