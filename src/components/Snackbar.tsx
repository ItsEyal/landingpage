import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
} from "@chakra-ui/react";

export default function Snackbar({
  isVisible,
  onClose,
  ...props
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  return isVisible ? (
    <Alert status="success" {...props}>
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>Enrolled! Check your email</AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <></>
  );
}
