namespace :radiant do
  namespace :extensions do
    namespace :yui_rte_filter do

      #desc "Runs the migration of the Attachments extension"
      #task :migrate => :environment do
        #require 'radiant/extension_migrator'
        #if ENV["VERSION"]
          #AttachmentsExtension.migrator.migrate(ENV["VERSION"].to_i)
        #else
          #AttachmentsExtension.migrator.migrate
        #end
      #end

      desc "Copies public assets of the YuiRteFilterExtension to the instance public/ directory."
      task :update => :environment do
        is_svn_or_dir = proc {|path| path =~ /\.svn/ || File.directory?(path) }
        puts "Copying assets from YuiRteFilterExtension"
        Dir[YuiRteFilterExtension.root + "/public/**/*"].reject(&is_svn_or_dir).each do |file|
          path = file.sub(YuiRteFilterExtension.root, '')
          directory = File.dirname(path)
          mkdir_p RAILS_ROOT + directory, :verbose => false
          cp file, RAILS_ROOT + path, :verbose => false
        end
      end
    end
  end
end

