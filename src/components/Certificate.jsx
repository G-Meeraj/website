import React, { useState } from "react"
import { Modal, IconButton, Box, Typography, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import DownloadIcon from "@mui/icons-material/Download"

const Certificate = ({ ImgSertif, title, issuer, date, description }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleDownload = () => {
		const link = document.createElement("a")
		link.href = ImgSertif
		link.download = `${title || "Certificate"}.jpg` // Default filename
		link.click()
	}

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
					},
				}}>
				<img
					src={ImgSertif}
					alt={title || "Certificate"}
					style={{
						width: "100%",
						height: "auto",
						display: "block",
						objectFit: "cover",
					}}
					onClick={handleOpen}
				/>
			</Box>

			{/* Certificate Info */}
			<Box sx={{ mt: 2, mb: 3 }}>
				<Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
					{title}
				</Typography>
				{issuer && (
					<Typography variant="body1" sx={{ color: "text.secondary", mb: 0.5 }}>
						Issued by: {issuer}
					</Typography>
				)}
				{date && (
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						{date}
					</Typography>
				)}
			</Box>

			{/* Modal */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Box
					sx={{
						position: "relative",
						width: "auto",
						maxWidth: "90vw",
						maxHeight: "90vh",
						outline: "none",
					}}>
					{/* Close Button */}
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 16,
							top: 16,
							color: "white",
							backgroundColor: "rgba(0,0,0,0.6)",
							"&:hover": {
								backgroundColor: "rgba(0,0,0,0.8)",
							},
						}}>
						<CloseIcon />
					</IconButton>

					{/* Modal Image */}
					<img
						src={ImgSertif}
						alt="Certificate Full View"
						style={{
							display: "block",
							maxWidth: "100%",
							maxHeight: "90vh",
							margin: "0 auto",
							objectFit: "contain",
						}}
					/>

					{/* Download Button */}
					<Box
						sx={{
							position: "absolute",
							bottom: 16,
							left: "50%",
							transform: "translateX(-50%)",
							textAlign: "center",
						}}>
						<Button
							variant="outlined"
							startIcon={<DownloadIcon />}
							onClick={handleDownload}
							sx={{
								backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark black transparent background
								color: "#a855f7", // Purple text
								border: "1px solid rgba(139, 92, 246, 0.3)", // Light purple border
								borderRadius: "24px", // Rounded corners
								padding: "8px 16px", // Button padding
								backdropFilter: "blur(10px)", // Blur effect for transparency
								transition: "all 0.3s ease",
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 1)", // Fully black on hover
									borderColor: "rgba(139, 92, 246, 0.5)", // Darker purple border on hover
								},
							}}>
							Download
						</Button>
					</Box>
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate
