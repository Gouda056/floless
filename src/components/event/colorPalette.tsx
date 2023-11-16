import { Dialog, DialogContent, Box, Button } from "@mui/material";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

interface props {
  open: boolean;
  handleClose: () => void;
  onColorSelect: (event: React.SyntheticEvent | any) => void;
}
export default function ColorPalette({
  open,
  handleClose,
  onColorSelect,
}: props) {
  const [color, setColor] = useColor("#561ecb");

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogContent sx={{ padding: "9px 12px" }}>
        <ColorPicker color={color} onChange={setColor} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button color="error" variant="contained" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            onClick={() => {
              onColorSelect(color.hex);
              handleClose();
            }}
            type="submit"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
