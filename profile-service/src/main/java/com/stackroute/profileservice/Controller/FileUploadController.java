package com.stackroute.profileservice.Controller;
import com.stackroute.profileservice.Model.UploadResponse;
import com.stackroute.profileservice.Service.FileStorageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/profile-service")
@CrossOrigin("*")
public class FileUploadController {

    private final FileStorageService fileStorageService;

    public FileUploadController(FileStorageService fileStorageService) {
        this.fileStorageService = fileStorageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<UploadResponse> uploadFile(
            @RequestParam(name = "file", required = false) MultipartFile file,
            @RequestParam("fullName") String fullName

    ) {
        String fileName = fileStorageService.storeFile(file,fullName);

        UploadResponse uploadResponse = new UploadResponse(fileName, fullName);

//      return ResponseEntity.ok().body(uploadResponse);
        return ResponseEntity.status(HttpStatus.OK).body(uploadResponse);
    }
}