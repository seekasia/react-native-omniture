require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |spec|
  spec.name         = "react-native-omniture"
  spec.version      = package['version']
  spec.summary      = "Omniture integration - react native"

  spec.homepage     = package['homepage']
  spec.author       = "SeekAsia.com"
  spec.platform     = :ios, "9.0"

  spec.source       = { :git => "https://github.com/seekasia/react-native-omniture.git", :tag => "#{spec.version}" }
  spec.source_files  = "ios/**/*.{h,m}"
  
  spec.dependency "React"
  spec.dependency "AdobeMobileSDK"
end
