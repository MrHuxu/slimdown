require 'sinatra'
require 'slim'
require 'coderay'

get '/' do
  @title = '跳大飞机的Blog-首页'
  slim :index
end

get '/archives' do
  @title = '文章归档'
  archives13 = Dir.glob('views/archives/2013/*.*')
  @arc_paths13 = Array.new
  @arc_names13 = Array.new
  @arc_times13 = Array.new
  @arc_tags13 = Array.new
  archives13.each do |arc|
    @arc_paths13.push(arc.split('')[20..-4].join)
    @arc_names13.push(arc.split('*')[1])
    @arc_times13.push(arc.split('*')[2])
    @arc_tags13.push(arc.split('*')[3].split('.')[0])
  end
  archives14 = Dir.glob('views/archives/2014/*.*')
  @arc_paths14 = Array.new
  @arc_names14 = Array.new
  @arc_times14 = Array.new
  @arc_tags14 = Array.new
  archives14.each do |arc|
    @arc_paths14.push(arc.split('')[20..-4].join)
    @arc_names14.push(arc.split('*')[1])
    @arc_times14.push(arc.split('*')[2])
    @arc_tags14.push(arc.split('*')[3].split('.')[0])
  end
  slim :archives
end

get '/projects' do
  @title = '我的项目'
  slim :projects
end

get '/aboutme' do
  @title = '关于'
  slim :aboutme
end

get '/archives/2013/:arc_path' do
  @title = params[:arc_path].split('*')[1]
  @arc_name = params[:arc_path].split('*')[0]
  slim :show_archive, :locals => { :content => markdown(('/archives/2013/' + params[:arc_path]).to_sym)}
end

get '/archives/2014/:arc_path' do
  @title = params[:arc_path].split('*')[1]
  @arc_name = params[:arc_path].split('*')[0]
  slim :show_archive, :locals => { :content => markdown(('/archives/2014/' + params[:arc_path]).to_sym)}
end
