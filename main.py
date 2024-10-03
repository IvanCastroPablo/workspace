import re

def read_urls(file_path):
    with open(file_path, 'r') as file:
        urls = file.readlines()
    return [url.strip() for url in urls]

def analyze_urls(urls):
    # Define a regex pattern to capture the expected structure of the URL
    pattern = re.compile(r'^http://www\.[a-z]{3}\.[a-z]{3}\.[a-z]{3}/[a-z]{3}/[a-z]{3}$')
    
    # List to hold URLs that don't match the pattern
    mismatched_urls = []
    
    # Iterate through each URL and check if it matches the pattern
    for url in urls:
        if not pattern.match(url):
            mismatched_urls.append(url)
    
    return mismatched_urls

def main(file_path):
    urls = read_urls(file_path)
    mismatched_urls = analyze_urls(urls)
    
    if mismatched_urls:
        print("URLs that are different from the expected structure:")
        for url in mismatched_urls:
            print(url)
    else:
        print("All URLs match the expected structure.")

if __name__ == "__main__":
    # Replace 'path/to/your/urls.txt' with the actual path to your file
    file_path = '/home/curso/Descargas/urls.txt'
    main(file_path)
