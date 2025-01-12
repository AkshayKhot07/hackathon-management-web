import * as Dialog from "@radix-ui/react-dialog";
import { IoCloseSharp } from "react-icons/io5";
import { ReactNode } from "react";


export interface ModalProps extends Dialog.DialogProps {
  title?: string;
  description?: string;
  trigger?: ReactNode;
  triggerProps?: Dialog.DialogTriggerProps;
  portalProps?: Dialog.DialogPortalProps;
  overlayProps?: Dialog.DialogOverlayProps;
  contentProps?: Dialog.DialogContentProps;
  titleProps?: Dialog.DialogTitleProps;
  descriptionProps?: Dialog.DialogDescriptionProps;
  closeProps?: Dialog.DialogCloseProps;
  canClose?: boolean;
  preventOutsideClose?: boolean;
}

const Modal = ({
  title,
  description,
  trigger,
  triggerProps,
  portalProps,
  overlayProps,
  contentProps,
  titleProps,
  descriptionProps,
  closeProps,
  canClose = false,
  children,
  preventOutsideClose,
  ...props
}: ModalProps) => (
  <Dialog.Root {...props}
  modal={false}
  >
    {trigger && (
      <Dialog.Trigger asChild {...triggerProps}
      >
        {trigger}
      </Dialog.Trigger>
    )}
    <Dialog.Portal {...portalProps}
    
    >
      <Dialog.Overlay
className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow"
        {...overlayProps}
      />
      <Dialog.Content
      
className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow"
        {...contentProps}
        onPointerDownOutside={(e) => preventOutsideClose && e.preventDefault()}
      >
        {title && (
          <Dialog.Title
            className="text-mauve12  m-0 text-[17px] font-medium"
            {...titleProps}
          >
            {title}
          </Dialog.Title>
        )}
        {description && (
          <Dialog.Description
            className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal"
            {...descriptionProps}
          >
            {description}
          </Dialog.Description>
        )}
        {children}
        {canClose && (
          <Dialog.Close asChild {...closeProps}>
            <button
              className="text-violet11 cursor-pointer hover:text-error absolute right-[10px]  top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none "
              aria-label="Close"
            >
              <IoCloseSharp />
            </button>
          </Dialog.Close>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;


