/** @format */

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const Dialogue = ({ open, onClose, imagUrl }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <Dialog className='custom_dialogue' open={open} onClose={handleClose}>
        <DialogContent>
          <div className='shadow-card p-5 rounded-md'>
            {imagUrl ? (
              <>
                <img
                  className='w-full h-[450px] mx-auto object-contain'
                  src={imagUrl}
                  alt='image'
                />
              </>
            ) : (
              <>
                <div className='h-[285px] flex items-center justify-center'>
                  <div className='border-black/5 h-20 w-20 animate-spin rounded-full border-8 border-t-gray-900' />
                </div>
              </>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dialogue;
