import os


def rename_jpg_files(folder_path):
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".jpg"):
            new_name = filename.replace(" ", "_")
            if not new_name.endswith(".jpg"):
                new_name = new_name[:-4] + ".jpg"
            if new_name != filename:
                src = os.path.join(folder_path, filename)
                dst = os.path.join(folder_path, new_name)
                os.rename(src, dst)
                print(f"Renamed: {filename} -> {new_name}")


if __name__ == "__main__":
    # Set your relative folder path here
    relative_folder = (
        "../public/images/hi"  # Example: folder named 'images' next to 'parser'
    )
    folder = os.path.abspath(os.path.join(os.path.dirname(__file__), relative_folder))
    rename_jpg_files(folder)
